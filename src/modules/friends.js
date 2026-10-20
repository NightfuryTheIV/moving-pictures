export const friends = {
  namespaced: true,
  state: () => ({
    friends: [],
  }),
  
  mutations: {
    setFriends(state, friends) {
      state.friends = friends;
    },
    addFriend(state, friend) {
      state.friends.push(friend);
    }
  }
}