export const INIT_USERS = [
  {
    id: 1,
    email: "lesleyc@bu.edu",
    password: "password",
    hash: "hash",
    facebook_id: "facebookid",
    google_id: "googleid",
    spotify_id: "spotifyid",
  },
  {
    id: 2,
    email: "ryan@bu.edu",
    password: "password",
    hash: "hash",
    facebook_id: "facebookid2",
    google_id: "googleid2",
    spotify_id: "spotifyid2",
  },
  {
    id: 3,
    email: "robert@bu.edu",
    password: "password",
    hash: "hash1",
    facebook_id: "facebookid1",
    google_id: "googleid1",
    spotify_id: "spotifyid1",
  },
  {
    id: 4,
    name: "edge case",
    email: "robert@bu.edu",
    password: "password",
    hash: "hash1",
    facebook_id: "facebookid1",
    google_id: "googleid1",
    spotify_id: "spotifyid1",
  },
];

export const getOne = {};

export const toggleAction = {
  id: 1,
  name: "Lesley",
  email: "lesleyc@bu.edu",
  password: "password",
  hash: "hash",
  facebook_id: "facebookid",
  google_id: "googleid",
  spotify_id: "spotifyid",
};

export const afterToggle = [];

export const newObject = {};
export const afterAdd = [...INIT_USERS, newObject];
export const editedObject = {};
export const afterEdit = [{}, {}];

export const afterDelete = [];
export const weirdNewObject = {};
export const mergedWithWeird = {};
export const twoObjects = {};

export const afterMerged = [{}, {}];
