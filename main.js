const API_KEY = `7109179c29414b97985b`;
const serviceId = 'COOKRCP01';
const dataType = 'json';
let startIdx = '1';
let endIdx = '20';

let recipes = []

// 전체 레시피 url
let url_object = new URL(`https://openapi.foodsafetykorea.go.kr/api/${API_KEY}/${serviceId}/${dataType}/${startIdx}/${endIdx}`);

// 전체 레시피 데이터를 가져오는 함수
const getRecipes = async() => {
    const response = await fetch(url_object)
    const data = await response.json()
    console.log("data 결과 : ", data)

    total_count = data.COOKRCP01.total_count
    console.log("total_count 결과 : ", total_count)

    recipes = data.COOKRCP01.row        // recipes 자주 변경될 요소이므로, 코드 상단에 전역변수로 선언한다.
    console.log("recipes 결과", recipes)
}


// 특정 레시피 데이터를 가져오는 함수
let recipeName = '된장국'
const getRecipesName = async() => {
    url_object = new URL(`https://openapi.foodsafetykorea.go.kr/api/${API_KEY}/${serviceId}/${dataType}/${startIdx}/${endIdx}/RCP_NM=${recipeName}`);
    await getRecipes()
}


getRecipes()
// getRecipesName()



