import http from './../../../base/api/public'
import querystring from 'querystring'
let sysConfig = require('@/../config/sysConfig');
let apiUrl = sysConfig.xcApiUrlPre;

//查询课程列表
//我的课程列表
export const findCourseList = (page,size,params) => {
//使用工具类将json对象转成key/value
  let queries = querystring.stringify(params);
  return http.requestQuickGet(apiUrl+"/course/courseBase/list/"+page+"/"+size+"?"+queries)
};

//查询课程分类
export const category_findlist= () => {
  return http.requestQuickGet(apiUrl+'/category/list')
};
/*添加课程基础信息*/
export const addCourseBase = params => {
  return http.requestPost(apiUrl+'/course/courseBase/add',params)
};
/*查询课程计划*/
export const findTeachplanList = courseid => {
  return http.requestQuickGet(apiUrl+'/course/teachplan/list/'+courseid)
};
/*添加课程计划*/
export const addTeachplan = teachplah => {
  return http.requestPost(apiUrl+'/course/teachplan/add',teachplah)
};

//保存课程图片地址到课程数据库
export const addCoursePic= (courseId,pic) => {
  return http.requestPost(apiUrl+'/course/coursePic/add?courseId='+courseId+"&pic="+pic)
};
//查询课程图片
export const findCoursePicList = courseId => {
  return http.requestQuickGet(apiUrl+'/course/coursePic/list/'+courseId)
};

//删除课程图片
export const deleteCoursePic= courseId => {
  return http.requestDelete(apiUrl+'/course/coursePic/delete?courseId='+courseId)
};

/*预览课程*/
export const preview = id => {
  return http.requestPost(apiUrl+'/course/preview/'+id);
};
/*发布课程*/
export const publish = id => {
  return http.requestPost(apiUrl+'/course/publish/'+id);
};
//查询课程信息
export const findCourseView = courseId => {
  return http.requestQuickGet(apiUrl+'/course/courseView/'+courseId)
};

/*保存媒资信息*/
export const savemedia = teachplanMedia => {
  return http.requestPost(apiUrl+'/course/savemedia',teachplanMedia);
};

//获取课程基本信息
export const getCourseBaseById = id => {
  return http.requestQuickGet(apiUrl+'/course/courseBase/get/'+id)
};
//更新课程基本信息
export const updateCourseBase= (id,course) => {
  return http.requestPut(apiUrl+'/course/courseBase/update/'+id,course)
};

//获取课程营销信息
export const getCourseMarketById = id => {
  return http.requestQuickGet(apiUrl+'/course/courseMarket/get/'+id)
};

// 更新课程营销信息
export const updateCourseMarket =(id,courseMarket) => {
  return http.requestPost(apiUrl+'/course/courseMarket/update/'+id,courseMarket)
};

// 更新教师信息
export const findTeacherInfo =(id) => {
  return http.requestPost(apiUrl+'/course/teacher/get/'+id)
};

