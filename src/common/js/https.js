import axios from 'axios'

// 请求
// function post(url) {
//     return function (params) {
//         return axios.post(url, {
//             params
//         }).then((res) => {
//             return res.data
//         }).catch(() => {

//         })
//     }
// }
function post(url, params) {
    return axios.post(url,params).then((res) => {
        return res
    }).catch(() => {

    })
}

// 弹窗
function showDialog (that, msg, type) {
    that.$message({
        message: msg,
        type: type
    })
}

export {post, showDialog}