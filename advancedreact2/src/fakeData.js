import {faker} from '@faker-js/faker'

const products = new Array(24).fill(null).map(()=>({
    id: faker.database.mongodbObjectId(),
    name: faker.commerce.productName(),
}))

export default products