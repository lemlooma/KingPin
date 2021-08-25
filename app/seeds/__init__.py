from flask.cli import AppGroup

from .projects import seed_projects, undo_projects
from .tasks import seed_tasks, undo_tasks

from .users_teams import seed_users_teams, undo_users_teams

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
   
    seed_users_teams()
    seed_projects()
    seed_tasks()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    
    seed_users_teams()
    seed_projects()
    seed_tasks()
    # Add other undo functions here
