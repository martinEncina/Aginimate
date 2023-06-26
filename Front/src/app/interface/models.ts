export interface allProductsI {   
        id: number,
        title: string,
        price: number,
        description: string,
        category: string,
        image: string,
        rating: dataRating[]
          
        }
   
export interface dataRating {
          rate: number,
          count: number,     
}
