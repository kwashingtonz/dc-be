"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductReqDto = void 0;
class ProductReqDto {
    fillViaRequest(obj) {
        this.searchText = obj.searchText;
        this.gender = parseInt(obj.gender);
        this.type = parseInt(obj.typ);
        this.sortType = obj.sortType;
    }
    getSearchText() {
        return this.searchText;
    }
    setSearchText(searchText) {
        this.searchText = searchText;
    }
    getGender() {
        return this.gender;
    }
    setGender(gender) {
        this.gender = gender;
    }
    getType() {
        return this.type;
    }
    setType(type) {
        this.type = type;
    }
    getSortType() {
        return this.sortType;
    }
    setSortType(sortType) {
        this.sortType = sortType;
    }
}
exports.ProductReqDto = ProductReqDto;
