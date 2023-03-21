function makeFriendsList(friends) {
  const ulFriend = document.createElement('ul');
  // for (const iterator of friends) {
  //   ulFriend.insertAdjacentHTML('beforeend', `<li>${iterator.firstName} ${iterator.lastName}</li>`)
  // };
  // Можно ли делать через innerHTML как показано ниже? Если liFriends объявить перед циклом for, то почему friends[i].firstName всегда получает последнее значение массива friends?
 for(let i = 0; i < friends.length; i++) {
    const liFriends = document.createElement('LI');
    liFriends.innerHTML = friends[i].firstName + " " + friends[i].lastName;
    ulFriend.append(liFriends);
  }
  return ulFriend;
}
