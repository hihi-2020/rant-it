
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('rants').del()
    .then(function () {
      // Inserts seed entries
      return knex('rants').insert([
        {
          id: 1,
          title: "There is only one Ocean",
          rant: "Something about oceans...",
          author: "Robbie Hamilton",
          date: 0
        },
        {
          id: 2,
          title: "There is only one Ocean",
          rant: "Something about oceans...",
          author: "Robbie Hamilton",
          date: 0
        },
        {
          id: 3,
          title: "There is only one Ocean",
          rant: "Something about oceans...",
          author: "Robbie Hamilton",
          date: 0
        },
        {
          id: 4,
          title: "There is only one Ocean",
          rant: "Something about oceans...",
          author: "Robbie Hamilton",
          date: 0
        },
        {
          id: 5,
          title: "There is only one Ocean",
          rant: "Something about oceans...",
          author: "Robbie Hamilton",
          date: 0
        }
      ]);
    });
};
