import json, time

cache = {}

def save(key, value, ttl=3600):
    cache[key] = {"value": value, "expiry": time.time() + ttl}

def get(key):
    item = cache.get(key)
    if item and item["expiry"] > time.time():
        return item["value"]
    return None
