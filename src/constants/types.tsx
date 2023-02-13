interface IAdress {
  city: string,
  geo: {
    lat: string,
    lng: string
  },
  street: string,
  suite: string,
  zipcode: string
}

interface ICompany {
  bs: string,
  catchPhrase: string,
  name: string
}

export interface IUser {
  id: string,
  name: string,
  phone: string,
  username: string,
  website: string,
  email: string,
  adress: IAdress[],
  company: ICompany[]
}

export interface IPost {
  userId: string,
  id: string,
  title: string,
  body: string
}

export interface IAlbum {
  userId: string,
  id: string,
  title: string
}