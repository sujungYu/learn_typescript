interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}

// 1. 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product[]> {
    // ..
}

// interface ProductDetail {
//     id: number;
//     name: string;
//     price: number;
// }

// function displayProductDetail(shoppingItem: ProductDetail) {

// }
// 유틸리티 타입 - Pick을 이용해서 기존에 있는 타입을 이용해서 원하는 방향으로 변환하는 것이다.
// 장점 - 불필요한 타입코드가 줄어들고 훨씬 깔끔한 방법으로 타입을 정의할 수 있다.

// 2.특정 상품의 상세 성보를 나타내기 위한 함수
type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>
function displayProductDetail(shoppingItem: Pick<Product, 'id' | 'name' | 'price'>) {

}

// interface UpdateProduct {
//     id?: number;
//     name?: string;
//     price?: number;
//     brand?: string;
//     stock?: number;
// }
// Partial - Product에 타입을 만족하는 모든 부분집합을 Partial이라고 하는 유티리티 타입을 통해서 생성할 수 있다.
type UpdateProduct = Partial<Product>
// 3. 특정 상품 정보를 업데이트(갱신)하는 함수
// 상품정보에서 일부만 업데이트 할 것이기 때문에 Partial 사용
function updateProductItem(productItem: Partial<Product>) {

}

// 4. 유틸리티 타입 구현하기 - Partial
interface UserProfile {
    username: string;
    email: string;
    profilePhotoUrl: string;
}
// interface UserProfileUpdate {
//     username?: string;
//     email?: string;
//     profilePhotoUrl?: string;
// }
// #1
// type UserProfileUpdate = {
//     username?: UserProfile['username']
//     email?: UserProfile['email']
//     profilePhotoUrl?: UserProfile['profilePhotoUrl']
// }

// #2 (맵드 타입)
// type UserProfileUpdate = {
//     [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p]
// }
// type UserProfileKeys = keyof UserProfile

// #3
type UserProfileUpdate = {
    [p in keyof UserProfile]?: UserProfile[p]
}

// #4
// Partial
type Subset<T> = {
    [p in keyof T]?: T[p]
}