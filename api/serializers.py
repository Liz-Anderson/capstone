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

class NestedFishSerializer(serializers.ModelSerializer):
    time_info = NestedTimeSerializer(many=True, source='time_array')
    month_info = NestedMonthSerializer(many=True, source='month_array')
    class Meta:
        fields = ('id', 'id_num', 'name', 'location', 'rarity', 'month_span', 'is_all_day', 'is_all_year', 'time_info', 'month_info', 'shadow_size', 'icon')
        model = Fish

class NestedBugSerializer(serializers.ModelSerializer):
    time_info = NestedTimeSerializer(many=True, source='time_array')
    month_info = NestedMonthSerializer(many=True, source='month_array')
    class Meta:
        fields = ('id', 'id_num', 'name', 'location', 'rarity', 'month_span', 'is_all_day', 'is_all_year', 'time_info', 'month_info', 'icon')
        model = Bug

class NestedSeaCreatureSerializer(serializers.ModelSerializer):
    time_info = NestedTimeSerializer(many=True, source='time_array')
    month_info = NestedMonthSerializer(many=True, source='month_array')
    class Meta:
        fields = ('id', 'id_num', 'name', 'month_span', 'is_all_day', 'is_all_year', 'time_info', 'month_info', 'shadow_size', 'speed', 'icon')
        model = SeaCreature

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

class NestedCustomUserSerializer (serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'username',)
        model = CustomUser

class CustomUserSerializer (serializers.ModelSerializer):
    caught_fish_details = NestedFishSerializer(many=True, source='caught_fish', read_only=True)
    caught_bugs_details = NestedBugSerializer(many=True, source='caught_bugs', read_only=True)
    caught_seacreatures_details = NestedSeaCreatureSerializer(many=True, source='caught_seacreatures', read_only=True)
    friends_details = NestedCustomUserSerializer(many=True, source='friends', read_only=True)
    outbound_friend_requests_details = NestedCustomUserSerializer(many=True, source='outbound_friend_requests', read_only=True)
    inbound_friend_requests_details = NestedCustomUserSerializer(many=True, source='inbound_friend_requests', read_only=True)
    class Meta:
        fields = ('id', 'username', 'caught_fish', 'caught_bugs', 'caught_seacreatures', 'caught_fish_details', 'caught_bugs_details', 'caught_seacreatures_details', 'friends', 'outbound_friend_requests', 'friends_details', 'outbound_friend_requests_details', 'inbound_friend_requests_details')
        model = CustomUser