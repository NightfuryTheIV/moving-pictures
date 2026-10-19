<script setup>
    const props = defineProps({
        friendstuff: {
            type: Object,
            required: true
        }
    })
</script>

<template>
    <div class="friend-activity-card">
        <img :src="friendstuff.avatar" :alt="friendstuff.name" class="friend-avatar" />
        <p class="friend-name"><span id="friendname">{{ friendstuff.name }}</span> watched <span id="movie-title">{{ friendstuff.movie }}</span> and rated it a {{ friendstuff.rating }}/10</p>
    </div>
</template>

<style scoped>
.friend-activity-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    display: flex;
    flex-direction: row;
    text-wrap: wrap;
    width: 40%;
}

#friendname {
    font-weight: bold;
    color: black;
}

#movie-title {
    font-style: italic;
    color: black;
}

.friend-avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
}

.friend-name {
    margin: 16px 0 8px;
    font-size: 32px;
    font-weight: bold;
    color: #666;
    padding-left: 16px;
}
</style>