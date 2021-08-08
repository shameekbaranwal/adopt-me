# [Adopt-Me](https://adopt-me-web.netlify.app)

A simple pet adoption web-app project I created to begin learning about the React ecosystem and TailwindCSS from the Intro to React course by Brian Holt.
The UI is written using React and TailwindCSS, and it is supported by the official and free [Petfinder API](https://www.petfinder.com/developers/).

On the home-page, a user can fill any relevant fields and search for matching pets available for adoption, and they can click on any suitable pet from the list to view more details on a new page, where they can choose whether to adopt that pet.

The UI is fully responsive, thanks to the custom classes in TailwindCSS.

In order to run this app locally,

1.  Clone the repository.
2.  Run `npm install` to install all the dependencies.
3.  Create a free-tier developer account on the [Petfinder](https://www.petfinder.com/developers/) site, and retrieve the client ID and client secret keys.
4.  Create `.env` file in the root directory of the app, and paste the following in it:

```
API_URL=https://api.petfinder.com/v2
CLIENT_ID=<your client ID from Petfinder>
CLIENT_SECRET=<your client secret from Petfinder>
```

5. Finally, run `npm run dev` in the terminal to bundle the app using parcel and host it locally.

A live preview of the latest commit is available [here](https://adopt-me-web.netlify.app).

To-do:

- [ ] Improve the image carousel in Details page.
- [ ] Add more detail fields in the Details page.
