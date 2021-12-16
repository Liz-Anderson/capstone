from rest_framework import serializers

from critters.models import Fish, Bug, SeaCreature, Month, Time
from users.models import CustomUser



class NestedMonthSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('month_num', 'month_name')
        model = Month

class NestedTimeSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('hour', 'hour_am_pm')
        model = Time

class MonthSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('month_num', 'month_name')
        model = Month

class TimeSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('hour', 'hour_am_pm')
        model = Time

class FishSerializer(serializers.ModelSerializer):
    time_info = NestedTimeSerializer(many=True, source='time_array')
    month_info = NestedMonthSerializer(many=True, source='month_array')
    class Meta:
        fields = ('id', 'id_num', 'name', 'location', 'rarity', 'month_span', 'is_all_day', 'is_all_year', 'time_info', 'month_info', 'shadow_size', 'icon')
        model = Fish

class BugSerializer(serializers.ModelSerializer):
    time_info = NestedTimeSerializer(many=True, source='time_array')
    month_info = NestedMonthSerializer(many=True, source='month_array')
    class Meta:
        fields = ('id', 'id_num', 'name', 'location', 'rarity', 'month_span', 'is_all_day', 'is_all_year', 'time_info', 'month_info', 'icon')
        model = Bug

class SeaCreatureSerializer(serializers.ModelSerializer):
    time_info = NestedTimeSerializer(many=True, source='time_array')
    month_info = NestedMonthSerializer(many=True, source='month_array')
    class Meta:
        fields = ('id', 'id_num', 'name', 'month_span', 'is_all_day', 'is_all_year', 'time_info', 'month_info', 'shadow_size', 'speed', 'icon')
        model = SeaCreature


class CustomUserSerializer (serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'username', 'caught_fish', 'caught_bugs', 'caught_seacreatures')
        model = CustomUser