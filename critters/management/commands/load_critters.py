import requests
from critters.models import Fish, Bug, SeaCreature, Month, Time


class Command(BaseCommand):

    def handle(self, *args, **options):
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
                print(f"created {new_fish.name}")
                new_fish.save()
                
        load_times()
        load_fish()
        # def load_bugs():


# sea_creatures_response = requests.get("https://acnhapi.com/v1a/sea")



# bugs_response = requests.get("https://acnhapi.com/v1a/bugs")