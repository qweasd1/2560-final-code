import axios from 'axios'

export const DEFAULT_USERS = [
  {
    "name": "Tony Wang",
    "password": "123456",
    "email": "zhw65@pitt.edu",
    "description": "admin of UF website",
    "avatoravator": "imgs/avator-tony.png",
    "isAdmin":true,
    "faces": [
      {
        "name": "Inka",
        "params": [
          0,
          0,
          -9,
          0,
          -11,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          12,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "face boy",
        "params": [
          7.162589674144456,
          -8.147498926220686,
          5.979623799884051,
          8.052805030576643,
          4.886788326128428,
          -3.615665359886062,
          2.7650196507298332,
          4.986804249088168,
          -8.655042522311987,
          7.011350312876502,
          -0.2465731993467699,
          -1.2435487895077557,
          5.593287454292856,
          4.973552302844247,
          1.0581850048780481,
          7.540540272854827,
          6.134211155986364,
          5.46840649092843
        ]
      },
      {
        "name": "big eyes",
        "params": [
          4.929460341808019,
          -2.57134657726376,
          0.33384237712004783,
          -2.1760082294958982,
          -3.1746114116290336,
          -4.340683864115411,
          -2.4308082287949606,
          2.090006856408692,
          2.884484816238264,
          -1.598226822621771,
          2.3926259740620353,
          1.4962426391184298,
          0.5770880998825838,
          0.18928727286610503,
          -1.7615445285436304,
          4.667467033793047,
          -4.776477068015819,
          -4.33899774129034
        ]
      },
      {
        "name": "eggplant",
        "params": [
          14.137904761788057,
          12.023477202931247,
          7.977489896769232,
          6.885086041262316,
          10.350568236355542,
          -3.2647024646821095,
          13.707938015766942,
          -4.662810141547167,
          5.602902216093376,
          -6.898363714404967,
          13.14678706356663,
          -12.329418755592629,
          4.7259532478022805,
          -8.51180957047909,
          -5.6510645783280555,
          -3.146030487369668,
          10.582569623522119,
          9.995070986350896
        ]
      },
      {
        "name": "thin face",
        "params": [
          -9.142937283994215,
          -2.3299723383259874,
          8.913387309371302,
          -6.788938705574323,
          27.85227993272396,
          1.9075280514368629,
          -9.52250138000113,
          1.287551057084709,
          8.597148586297738,
          -2.355653944798659,
          -3.8128906406040075,
          -0.7093540578142097,
          8.75588366562259,
          3.2025341505689973,
          5.118628976988848,
          -5.427109413324267,
          1.6068492794108735,
          5.002215934153686
        ]
      },
      {
        "name": "eyeless",
        "params": [
          9.777731031745912,
          3.1784757392322316,
          2.0241947134619664,
          -2.6205243244903276,
          0.16803567978230127,
          -7.066426334227507,
          -9.576912794721881,
          -8.588261129660761,
          -7.967510097670285,
          -3.937064953536411,
          -9.441346370380487,
          -2.554094586993565,
          2.459210819301507,
          -4.757541388427655,
          1.8192393627049661,
          -3.972271443746158,
          -3.1457863949822817,
          -3.0135362973132462
        ]
      }
    ],
    "articles": [
      {
        "title": "Guess Who I am",
        "img": "imgs/guess.jpg",
        "comments": [
          {
            "name":"Penny",
            "avator":"imgs/avator-penny.jpg",
            "text":"I can't guess"
          }
        ],
        "create_at": 1555599000000
      }
    ]
  },
  {
    "name":"Penny",
    "avator": "imgs/avator-penny.jpg",
    "articles":[],
    "password": "123456",
    "email": "yus84@pitt.edu",
    "description": "I'm an IS student",
    "faces": [
      {
        "name": "Inka",
        "params": [
          0,
          0,
          -9,
          0,
          -11,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          12,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "face boy",
        "params": [
          7.162589674144456,
          -8.147498926220686,
          5.979623799884051,
          8.052805030576643,
          4.886788326128428,
          -3.615665359886062,
          2.7650196507298332,
          4.986804249088168,
          -8.655042522311987,
          7.011350312876502,
          -0.2465731993467699,
          -1.2435487895077557,
          5.593287454292856,
          4.973552302844247,
          1.0581850048780481,
          7.540540272854827,
          6.134211155986364,
          5.46840649092843
        ]
      },
      {
        "name": "big eyes",
        "params": [
          4.929460341808019,
          -2.57134657726376,
          0.33384237712004783,
          -2.1760082294958982,
          -3.1746114116290336,
          -4.340683864115411,
          -2.4308082287949606,
          2.090006856408692,
          2.884484816238264,
          -1.598226822621771,
          2.3926259740620353,
          1.4962426391184298,
          0.5770880998825838,
          0.18928727286610503,
          -1.7615445285436304,
          4.667467033793047,
          -4.776477068015819,
          -4.33899774129034
        ]
      },
      {
        "name": "eggplant",
        "params": [
          14.137904761788057,
          12.023477202931247,
          7.977489896769232,
          6.885086041262316,
          10.350568236355542,
          -3.2647024646821095,
          13.707938015766942,
          -4.662810141547167,
          5.602902216093376,
          -6.898363714404967,
          13.14678706356663,
          -12.329418755592629,
          4.7259532478022805,
          -8.51180957047909,
          -5.6510645783280555,
          -3.146030487369668,
          10.582569623522119,
          9.995070986350896
        ]
      }
    ],
  },
  {
    "name":"Han Zheng",
    "avator": "imgs/1.jpeg",
    "articles":[]
  },
  {
    "name":"Andy",
    "avator": "imgs/2.jpeg",
    "articles":[]
  },
  {
    "name":"Hannah",
    "avator": "imgs/3.jpeg",
    "articles":[]
  }
]

// const API_ROOT = "http://localhost:8080"
// const API_ROOT = "http://3.85.231.169:5000"
const API_ROOT = "https://tonybear2560.tk"




class StoreService {

  users = DEFAULT_USERS

  articles = []

  currentUser = this.users[0]

  token = ""

  constructor() {
    // this.load()

  }

  get friends(){
    return this.users.filter(user=>user.id !== this.currentUser.id)
  }

  async init(){
    this.currentUser.faces = JSON.parse(this.currentUser.faces)
    this.users = await this.getUsers()
    this.loadArticles()
  }

  async getUsers(){
    const users = (await this.get("users"))
    users.forEach(user=>{
      user.faces = JSON.parse(user.faces)
    })
    return users
  }

  save() {
    window.localStorage.setItem("data", JSON.stringify(this.users))
    console.log(this.users);
  }



  loadArticles() {
    this.articles = []
    for (let user of this.users) {
      for (let article of user.articles) {
        article.comments = article.comments ? JSON.parse(article.comments) : []
        this.articles.push({...article, user})
      }
    }

    this.articles.sort((x, y) => y.id - x.id)
  }

  async addArticle(article) {
    this.currentUser.articles.push(article)

    const toInsert = {...article}
    toInsert.comments = JSON.stringify(article.comments)
    const data = await this.post(`users/${this.currentUser.id}/articles`,toInsert)
    article.id = data.id
    this.articles.push({...article, user: this.currentUser})
    this.articles.sort((x, y) => y.id - x.id)
  }

  async login(email,password) {
    const {user,token} = await this.post("auth/login",{
      email,
      password
    })
    this.token = token
    this.currentUser = user
    await this.init()
  }

  async register(_user) {
    _user["faces"] = "[]"
    const {user,token} = await this.post("auth/signup",_user)
    this.token = token
    this.currentUser = user

    await this.init()
  }


  async addComment(article,text){
    article.comments.push({
      "name":this.currentUser.name,
      "avator":this.currentUser.avator,
      "text":text
    })

    const toUpdate = {id:article.id,comments:JSON.stringify(article.comments)}
    await this.put("articles",toUpdate)
  }


  async updateUser(user){

    const toUpdate = {id:user.id, faces:JSON.stringify(user.faces),king:user.king}

    this.put("users",toUpdate)

  }


  async chooseKing(user){
    this.users.forEach((u)=>{
      u.king = false
    })
    user.king = true
    if(this.currentUser.id === user.id){
      this.currentUser.king = true
    }
    else{
      this.currentUser.king = false
    }
    await this.updateUser(user)
  }



  async get(url,params={}){
    return (await axios.get(`${API_ROOT}/${url}`,{
      params,
      headers:{
        Authorization:`Bearer ${this.token}`
      }
    })).data

  }



  async post(url,body={}){
    return (await axios.post(`${API_ROOT}/${url}`,body,{
      headers:{
        Authorization:`Bearer ${this.token}`
      }
    })).data
  }

  async put(url,body={}){
    return (await axios.put(`${API_ROOT}/${url}`,body,{
      headers:{
        Authorization:`Bearer ${this.token}`
      }
    })).data
  }

  logout(){
    this.currentUser = null
    this.users = []
    this.articles = []
  }


}



export let storeService = new StoreService()
console.log(storeService);


