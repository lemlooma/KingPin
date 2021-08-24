from app.models import db, Team, user_team, User


def seed_users_teams():
    backend = Team(title=' Backend')
    frontend = Team(title='frontend')
    design = Team(title='Design')
    dev_ops = Team(title='Dev Ops')
    customer_support = Team(title='Sustomer Support')
    product_team = Team(title='Product Team')

    demo = User(
        username="Demo",
        email="demo@aa.io",
        password="password"
    )

    demo.teams.append(backend)
    demo.teams.append(frontend)
    demo.teams.append(design)
    demo.teams.append(dev_ops)
    demo.teams.append(customer_support)
    demo.teams.append(product_team)
    db.session.add(demo)

    user1 = User(
        username="Nico Pierson",
        email="Kiel13@gmail.com",
        password="sb7sThWsBVXGl_R"
    )

    user1.teams.append( backend)
    db.session.add(user1)

    user2 = User(
        username="Simon Vargas",
        email="Hope.Schiller@yahoo.com",
        password="4R6NNcDjc8UdWdI"
    )

    user2.teams.append(frontend)
    db.session.add(user2)

    user3 = User(
        username="Meagan Smith",
        email="Lucas.Morar79@yahoo.com",
        password="7QDKhJO8uvSGC80"
    )

    user3.teams.append(design)
    db.session.add(user3)

    user4 = User(
        username="Manna Kong",
        email="Destinee79@hotmail.com",
        password="pd0A0gD85kZLHmR"
    )

    user4.teams.append(dev_ops)
    db.session.add(user4)

    user5 = User(
        username="Kira ",
        email="Idella16@yahoo.com",
        password="ofq4OKQAMNrOsZ3"
    )

    user5.teams.append(customer_support)
    db.session.add(user5)

    user6 = User(
        username="Henry Walton",
        email="Megane.Tremblay@gmail.com",
        password="XTtPT7V6M8ppdPV"
    )

    user6.teams.append(product_team)
    db.session.add(user6)

    user7 = User(
        username="Andru Watkins",
        email="Kaden.Mertz@gmail.com",
        password="9dpuMuEnvdg9jK_"
    )

    user7.teams.append(backend)
    db.session.add(user7)

    user8 = User(
        username="Pierre Guilbault",
        email="Zachariah33@gmail.com",
        password="qQfHsfh4bzB6qO0"
    )

    user8.teams.append(frontend)
    db.session.add(user8)

    user9 = User(
        username="Merv El-Sherbiny",
        email="Teresa.Volkman@gmail.com",
        password="CwlPxUvNjiGl9V9"
    )

    user9.teams.append(design)
    db.session.add(user9)

    user10 = User(
        username="Alexander Romero",
        email="Agnes70@hotmail.com",
        password="aiqzdZxeCTtg87U"
    )

    user10.teams.append(dev_ops)
    db.session.add(user10)

    user11 = User(
        username="Michelle Kontoff",
        email="Citlalli_Schmitt70@yahoo.com",
        password="QEonXk0JeaJbAXp"
    )

    user11.teams.append(customer_support)
    db.session.add(user11)

    user12 = User(
        username="Zhuoxin Tan",
        email="Quinton.Langworth@yahoo.com",
        password="tY4Il5pyMnjx3uO"
    )

    user12.teams.append(product_team)
    db.session.add(user12)

    user13 = User(
        username="Ji K",
        email="Tyrese60@hotmail.com",
        password="Wi8u1ZeZDStXqLB"
    )

    user13.teams.append(backend)
    db.session.add(user13)

    user14 = User(
        username="Kagen Hearn",
        email="Rodolfo.Jacobson32@yahoo.com",
        password="x3H8Gd4kIjTe_LG"
    )

    user14.teams.append(frontend)
    db.session.add(user14)

    user15 = User(
        username="Brandon Simpson",
        email="Mavis64@hotmail.com",
        password="ztVLn0lsV14Ive5"
    )

    user15.teams.append(design)
    db.session.add(user15)

    user16 = User(
        username="Monte Python",
        email="Guadalupe.Mitchell0@gmail.com",
        password="_Tx_W2JsvwyQEVC"
    )

    user16.teams.append(dev_ops)
    db.session.add(user16)

    user17 = User(
        username="Marcel Haley",
        email="Daisha.Senger62@yahoo.com",
        password="psOYyrfmn9JN5oo"
    )

    user17.teams.append(customer_support)
    db.session.add(user17)

    user18 = User(
        username="Eryn Keebler",
        email="Antone89@gmail.com",
        password="cgD0TkNfiHukp8N"
    )

    user18.teams.append(product_team)
    db.session.add(user18)

    user19 = User(
        username="David DeHerrera",
        email="Wiley.Gusikowski58@gmail.com",
        password="iP4nHCEN1F6NfCn"
    )

    user19.teams.append( backend)
    db.session.add(user19)

    user20 = User(
        username="Chloe Barber",
        email="Pearline_Heidenreich28@hotmail.com",
        password="H4BbPibiPhXZjz5"
    )

    user20.teams.append(frontend)
    db.session.add(user20)

    user21 = User(
        username="Mark Vasquez",
        email="Izabella_Grant@yahoo.com",
        password="J6RsR4uRTfqFSX1"
    )

    user21.teams.append(design)
    db.session.add(user21)

    user22 = User(
        username="Kyle Tseng",
        email="Lilly4@yahoo.com",
        password="VEvIZQj9RDQieym"
    )

    user22.teams.append(dev_ops)
    db.session.add(user22)

    user23 = User(
        username="Lema El-Sherbiny",
        email="Mckayla_Renner30@gmail.com",
        password="_EJa9WoHMBHMLm3"
    )

    user23.teams.append(customer_support)
    db.session.add(user23)

    user24 = User(
        username="Javier Mortiz",
        email="Cproduct_teamistine_Metz@yahoo.com",
        password="9ZgVSvWJeGdxzPT"
    )

    user24.teams.append(product_team)
    db.session.add(user24)

    user25 = User(
        username="Austin Williams",
        email="Kristopher.Senger54@yahoo.com",
        password="SYZTH5prF5RBuTj"
    )

    user25.teams.append(backend)
    db.session.add(user25)

    user26 = User(
        username="Fremy Frem",
        email="Luna.Dach51@yahoo.com",
        password="MXvFsgsndhnR_Sc"
    )

    user26.teams.append(frontend)
    db.session.add(user26)

    user27 = User(
        username="Diana Beatriz Tinoco",
        email="Terrance_Rau@hotmail.com",
        password="2ut72Tfyzt2MiuD"
    )

    user27.teams.append(design)
    db.session.add(user27)

    user28 = User(
        username="Peter Mace",
        email="Porter.Fay@yahoo.com",
        password="FhnNQWlHk9fo9CU"
    )

    user28.teams.append(dev_ops)
    db.session.add(user28)

    user29 = User(
        username="Casey Tuer",
        email="Zoey36@yahoo.com",
        password="8MNTEoP4SatmSnX"
    )

    user29.teams.append(customer_support)
    db.session.add(user29)

    user30 = User(
        username="Sunny Mallick",
        email="Malachi.Cummerata69@hotmail.com",
        password="TxP1zGts2wP45yK"
    )

    user30.teams.append(product_team)
    db.session.add(user30)

    db.session.add(backend)
    db.session.add(frontend)
    db.session.add(design)
    db.session.add(dev_ops)
    db.session.add(customer_support)
    db.session.add(product_team)

    db.session.commit()


def undo_users_teams():
    db.session.execute('TRUNCATE users_teams RESTART IDENTITY CASCADE;')
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.execute('TRUNCATE teams RESTART IDENTITY CASCADE;')
    db.session.commit()
