from app.models import db, Project


def seed_projects():

    user1 = Project(user_id=1, team_id=1,
                       title='Backend Ops', complete=False)

    db.session.add(user1)

    user2 = Project(user_id=2, team_id=1,
                       title='adipisci est inventore', complete=False)

    db.session.add(user2)

    user3 = Project(user_id=3, team_id=1,
                       title='occaecati omnis modi', complete=False)

    db.session.add(user3)

    user4 = Project(user_id=4, team_id=1,
                       title='quibusdam provident ullam', complete=False)

    db.session.add(user4)

    user5 = Project(user_id=5, team_id=1,
                       title='sequi rem voluptates', complete=False)

    db.session.add(user5)

    user6 = Project(user_id=6, team_id=2,
                       title='Product Scrum', complete=False)

    db.session.add(user6)

    user7 = Project(user_id=7, team_id=2,
                       title='ut saepe omnis', complete=False)

    db.session.add(user7)

    user8 = Project(user_id=8, team_id=2,
                       title='atque est porro', complete=False)

    db.session.add(user8)

    user9 = Project(user_id=9, team_id=2,
                       title='nostrum sint eveniet', complete=False)

    db.session.add(user9)

    user10 = Project(user_id=10, team_id=2,
                        title='blanditiis quisquam nihil', complete=False)

    db.session.add(user10)

    user11 = Project(user_id=11, team_id=3,
                        title='Sales Standup', complete=False)

    db.session.add(user11)

    user12 = Project(user_id=12, team_id=3,
                        title='repudiandae nisi quas', complete=False)

    db.session.add(user12)

    user13 = Project(user_id=13, team_id=3,
                        title='sed ut aut', complete=False)

    db.session.add(user13)

    user14 = Project(user_id=14, team_id=3,
                        title='quod laborum minima', complete=False)

    db.session.add(user14)

    user15 = Project(user_id=15, team_id=3,
                        title='iure amet rerum', complete=False)

    db.session.add(user15)

    user16 = Project(user_id=16, team_id=4,
                        title='Engineering Tickets', complete=False)

    db.session.add(user16)

    user17 = Project(user_id=17, team_id=4,
                        title='impedit blanditiis ut', complete=False)

    db.session.add(user17)

    user18 = Project(user_id=18, team_id=4,
                        title='nihil et voluptates', complete=False)

    db.session.add(user18)

    user19 = Project(user_id=19, team_id=4,
                        title='et nemo autem', complete=False)

    db.session.add(user19)

    user20 = Project(user_id=20, team_id=4,
                        title='et aut ducimus', complete=False)

    db.session.add(user20)

    user21 = Project(user_id=21, team_id=5,
                        title='Month End Review', complete=False)

    db.session.add(user21)

    user22 = Project(user_id=22, team_id=5,
                        title='explicabo voluptatem unde', complete=False)

    db.session.add(user22)

    user23 = Project(user_id=23, team_id=5,
                        title='magnam incidunt facilis', complete=False)

    db.session.add(user23)

    user24 = Project(user_id=24, team_id=5,
                        title='culpa id et', complete=False)

    db.session.add(user24)

    user25 = Project(user_id=25, team_id=5,
                        title='dicta id delectus', complete=False)

    db.session.add(user25)

    user26 = Project(user_id=26, team_id=6,
                        title='Shenanigans', complete=False)

    db.session.add(user26)

    user27 = Project(user_id=27, team_id=6,
                        title='quo qui nulla', complete=False)

    db.session.add(user27)

    user28 = Project(user_id=28, team_id=6,
                        title='ut quam pariatur', complete=False)

    db.session.add(user28)

    user29 = Project(user_id=29, team_id=6,
                        title='consequuntur est et', complete=False)

    db.session.add(user29)

    user30 = Project(user_id=30, team_id=6,
                        title='assumenda autem quos', complete=False)

    db.session.add(user30)

    db.session.commit()


def undo_projects():
    db.session.execute('TRUNCATE projects RESTART IDENTITY CASCADE;')
    db.session.commit()
