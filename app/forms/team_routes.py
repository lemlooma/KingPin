from flask import Blueprint, jsonify, session, request
from app.models import Team, User, user_team, db
from app.forms import TeamForm, UserTeamForm
from flask_login import login_required

team_routes = Blueprint('teams', __name__)


@team_routes.route('', methods=["Get"])
def teams():
    teams = Team.query.all()
    mutated_teams = []
    for team in teams:
        users = [user.to_dict() for user in team.users]
        team_dict = team.to_dict()
        users_string = 'users'
        team_dict[users_string] = users
        mutated_teams.append(team_dict)

    teams = mutated_teams
    team_dict = {}
    i = 0
    while i < len(teams):
        key = teams[i]['id']
        team_dict[key] = teams[i]
        i += 1
    return team_dict


@team_routes.route('/', methods=["POST"])
@login_required
def make():
    form = TeamForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        body = request.get_json()
        team = Team(
            title=form.data['title']
        )
        db.session.add(team)
        db.session.commit()
        team_dict = team.to_dict()
        team_obj = Team.query.get(team_dict['id'])
        user_ids = body['users']
        for user_id in user_ids:
            user = User.query.get(user_id)
            user.teams.append(team_obj)
        db.session.commit()
        users = [user.to_dict() for user in team.users]
        users_string = 'users'
        team_dict[users_string] = users
        return team_dict
    return {'errors': form.errors}


@team_routes.route('/<int:id>', methods=["GET"])
def team(id):
    team = Team.query.get(id)
    users = [user.to_dict() for user in team.users]
    team_dict = team.to_dict()
    users_string = 'users'
    team_dict[users_string] = users
    return team_dict


@team_routes.route('/<int:id>', methods=["PUT"])
@login_required
def edit(id):
    form = TeamForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        body = request.get_json()
        team = Team.query.get(id)
        team.title = form.data['title']
        team_dict = team.to_dict()
        user_ids = body['users']
        team_users = team.users
        length = len(team_users)
        i = 0
        while i < length:
            team_users[0].teams.remove(team)
            i += 1
        db.session.commit()
        for user_id in user_ids:
            user = User.query.get(user_id)
            user.teams.append(team)
        db.session.commit()
        users = [user.to_dict() for user in team.users]
        users_string = 'users'
        team_dict[users_string] = users
        return team_dict
    return {'errors': form.errors}


@team_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete(id):
    team = Team.query.get(id)
    db.session.delete(team)
    db.session.commit()
    return {'id': id}
    return {'errors': form.errors}


