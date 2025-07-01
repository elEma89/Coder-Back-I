import Entrega-1-Lunes-2 from "Entrega-1-Lunes-2";

class ProductManager{

    constructor(){
        this.pathFile = pathFile;
    }

   async getProducts() {
    try {
    //Recuperar data
    const fileData = await Entrega-1-Lunes-2.promises.readFile(this.pathFile, "utf-8");
    const products = JSON.parse(fileData);
    return products;
    } catch (error) {
        throw new Error("Error al agregar producto - ", error.message);
    }

}

export default ProductManager;
    
