const Mock = require("mockjs"); // 引入mockjs
const Random = Mock.Random; // 获取 mock.Random 对象

// mock一组数据

const produceNewsData = function() {
  let articles = [];
  for (let i = 0; i < 100; i++) {
    let newArticleObject = {
      title: Random.csentence(5, 30), // Random.csentence( min, max )
      thumbnail_pic_s: Random.dataImage("300x250", "mock的图片"), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
      date: Random.date() + " " + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    };
    articles.push(newArticleObject);
  }

  return {
    articles: articles
  };
};

// mock轮播图数据
const getCarousel = function() {
  let carouselList = [];
  for (let i = 0; i < 4; i++) {
    let newCarouselItem = {
      src: Random.dataImage("1920x567", "mock的轮播图")
    };
    carouselList.push(newCarouselItem);
  }
  return {
    carouselList: carouselList
  };
};

// mock产品大图数据
const productBig = function() {
    let productBigList = [];
  for (let i = 0; i < 2; i++) {
    let newproductBigItem = {
      src: Random.dataImage("600x400", "mock的产品大图"),
      title: Random.ctitle(),
      id: Random.integer(10000),
      desc: []
    };
    for (let j = 0; j < Random.integer(1, 3); j++) {
      newproductBigItem.desc.push(Random.cparagraph(1));
    }
    productBigList.push(newproductBigItem);
  }
  return {
    productBigList: productBigList
  };
};

// mock产品小图数据
const productSmall = function() {
    let productSmallList = [];
  for (let i = 0; i < 2; i++) {
    let productSmallObject = [];
    for (let i = 0; i < 4; i++) {
      let productSmallItem = {
        src: Random.dataImage("280x190", "mock的产品小图"),
        title: Random.ctitle(),
        id: Random.integer(10000),
        desc: []
      };
      for (let j = 0; j < Random.integer(1, 3); j++) {
        productSmallItem.desc.push(Random.cparagraph(1));
      }
      productSmallObject.push(productSmallItem);
    }
    productSmallList.push(productSmallObject);
  }
  return {
    productSmallList: productSmallList
  };
};

// mock近期新闻资讯数据
const newsHotList = function() {
  let newsHotListObject = [];
  for (let i = 0; i < 3; i++) {
    let newsHotItem = {
        title : Random.ctitle(),
        content : Random.cparagraph(),
        src : Random.dataImage("480x150", "mock的近期新闻"),
        createDay :Random.date(),
        id : Random.integer(10000)
    };
    newsHotListObject.push(newsHotItem);
  }
  return {
    newsHotListObject: newsHotListObject
  };
};

/* -------------index----------------*/
// 轮播图
Mock.mock("mock/getCarousel", "get", getCarousel);
// 获取产品大图
Mock.mock("mock/getProductBig", "get", productBig);
// 获取产品小图
Mock.mock("mock/getProductSmall", "get", productSmall);
// 获取近期新闻资讯
Mock.mock("mock/getNewsHotList", "get", newsHotList);
