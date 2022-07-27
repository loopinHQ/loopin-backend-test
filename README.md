# Hello! 👋

Firstly, thanks for taking the time to do this project!

We appreciate these sorts of projects can be a time-suck, so we only ask people (like you!) that we genuinely think will be a great fit at Loopin. So congrats on making it this far!

If you have any questions, you can chat to me (Alex Hughes) directly via email or LinkedIn.

## Your Assignment

We've built the `/frontend` for another generic todo app that's going to be the next big thing™; we've styled the components, added interfaces, and set-up all the data-fetching.

The only thing is, we don't yet have an API or a database - that's where you come in.

We want you to:

- Fork this repo
- Create a _new_ API repo in `/backend` using Node.js and TypeScript
- Modify the `/frontend` so that it calls your API successfully
- Add a database (we use PostGres/Prisma but use whatever you are comfortable with)

What we've testing for:

- Can we add a new todo?
- Can we update a todo to completed?
- Are there sensible tests written in the API?
- Do the CRUD actions work correctly, and update the databse?

✨ **Bonus Round** ✨

- How would you implement a tag system for the todos? i.e. if each Todo could have multiple tags? How would this effect your database architecture?
- How would you implement infinite scrolling or pagination in this app? Please write a comment
- Do you have any ideas on how you would improve the app? Please write a comment
- How would you add the functionality to delete todos? Please write a comment or ideally, implement the feature

## Getting Started

To run the frontend app, you just need to fork this repo and run the commands:

```
cd frontend
```

```
npm install
```

and

```
npm run dev
```

And you're done! 🎉

Familiarise yourself with what is in `models` and `services`, and take a look around at how we've implemented any mutations for ideas about how to get started.

## Technologies

For this test, we've tried to use a similar stack to what we actually use on on our frontend and website, so hopefully it will give you a little taste of what it's like to work at Loopin.

It's a very simple React app - built with Next.js and TypeScript, and styled with Tailwind. We're using SWR for data fetching, although at the moment it's only returning dummy data.

Here's a few links to resources that might be helpful:

- [TailwindCSS](https://tailwindcss.com/)
- [SWR: Getting Started](https://swr.vercel.app/docs/getting-started)
- [SWR: Mutations](https://swr.vercel.app/docs/mutation)
- [Next.js](https://nextjs.org/)

## Next Steps!

Once you've completed the task, please send it to the recruiter or directly to me.

If you're struggling or get stuck, please still submit something - we're looking more for how _you_ code, over absolute functionality - and whatever the outcome, we will send you feedback that will hopefully help in your future.

Good luck! 🤞
