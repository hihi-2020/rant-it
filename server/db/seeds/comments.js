
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {
          id: 1,
          comment: "This is a comment",
          author: "Jessica Veng",
          rant_id: 1
        },
        {
          id: 2,
          comment: "This is a comment",
          author: "Jessica Veng",
          rant_id: 2
        },
        {
          id: 3,
          comment: "This is a comment",
          author: "Jessica Veng",
          rant_id: 3
        },
        {
          id: 4,
          comment: "This is a comment",
          author: "Jessica Veng",
          rant_id: 4
        }
      ]);
    });
};
