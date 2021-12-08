import requests
from django.core.management.base import BaseCommand

from critters.models import Fish, Bug, SeaCreature, Month, Time


class Command(BaseCommand):

    def handle(self, *args, **options):

        Fish.objects.all().delete()
        Bug.objects.all().delete()
        SeaCreature.objects.all().delete()
        Month.objects.all().delete()
        Time.objects.all().delete()
        

        def load_times():
            time_data = ['12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm']
            for i in range(24):
                new_time = Time()
                new_time.hour = i
                new_time.hour_am_pm = time_data[i]
                new_time.save()

        def load_fish():
            fish_response = requests.get("https://acnhapi.com/v1a/fish").json()
            months_data = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
            for fish in fish_response:
                new_fish = Fish()
                new_fish.id_num = fish["id"]
                new_fish.name = fish["name"]["name-USen"]
                new_fish.location = fish["availability"]["location"]
                new_fish.rarity = fish["availability"]["rarity"]
                new_fish.shadow_size = fish["shadow"]
                new_fish.icon = fish["icon_uri"]
                new_fish.save()

                for month in fish["availability"]["month-array-northern"]:
                    month_obj, _ = Month.objects.get_or_create(month_num=month, month_name=months_data[month - 1])
                    new_fish.month_array.add(month_obj)


                for time in fish["availability"]["time-array"]:
                    time_obj = Time.objects.get(hour=time)
                    new_fish.time_array.add(time_obj)
                new_fish.save()
                
        
        def load_bugs():
            bugs_response = requests.get("https://acnhapi.com/v1a/bugs").json()
            months_data = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
            for bug in bugs_response:
                new_bug = Bug()
                new_bug.id_num = bug["id"]
                new_bug.name = bug["name"]["name-USen"]
                new_bug.location = bug["availability"]["location"]
                new_bug.rarity = bug["availability"]["rarity"]
                new_bug.icon = bug["icon_uri"]
                new_bug.save()

                for month in bug["availability"]["month-array-northern"]:
                    month_obj, _ = Month.objects.get_or_create(month_num=month, month_name=months_data[month - 1])
                    new_bug.month_array.add(month_obj)


                for time in bug["availability"]["time-array"]:
                    time_obj = Time.objects.get(hour=time)
                    new_bug.time_array.add(time_obj)
                new_bug.save()



        def load_sea_creatures():
            sea_creatures_response = requests.get("https://acnhapi.com/v1a/sea").json()
            months_data = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
            for sea in sea_creatures_response:
                new_sea_creature = SeaCreature()
                new_sea_creature.id_num = sea["id"]
                new_sea_creature.name = sea["name"]["name-USen"]
                new_sea_creature.shadow_size = sea["shadow"]
                new_sea_creature.speed = sea["speed"]
                new_sea_creature.icon = sea["icon_uri"]
                new_sea_creature.save()

                for month in sea["availability"]["month-array-northern"]:
                    month_obj, _ = Month.objects.get_or_create(month_num=month, month_name=months_data[month - 1])
                    new_sea_creature.month_array.add(month_obj)


                for time in sea["availability"]["time-array"]:
                    time_obj = Time.objects.get(hour=time)
                    new_sea_creature.time_array.add(time_obj)
                new_sea_creature.save()

        load_times()
        load_fish()
        load_bugs()
        load_sea_creatures()
