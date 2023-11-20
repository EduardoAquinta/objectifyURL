const convertQueryToMap = require("./objectifyURL")

describe("Unit tests for converting URL to Object", () => {
    it("converts a string to an object", () => {
        let query = "user"
        expect(typeof(query)).toBe("string")
        expect(typeof(convertQueryToMap(query))).toBe("object");
    })
    it("converts a . pair within a string into an object key:value pair", () => {
        let query = "user.name"
        expect(convertQueryToMap(query)).toStrictEqual({'user' : 'name'})
    })
    it("adds user name to the object {'user' : 'name' : {'Bob'} }", () => {
        let query = "user.name.firstname=Bob"
        expect(convertQueryToMap(query)).toStrictEqual({'user' : { 'name' : { 'firstname' : 'Bob'}}})
    })
})

describe.skip("Assertion Test", () => {
    it("the assertion test that comes with the kata", () => {
        let q = 'user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue'
        let out = {
                'user': {
                    'name': {
                        'firstname': 'Bob',
                        'lastname': 'Smith'
                    },
                    'favoritecolor': 'Light Blue'
                }
            };
        expect(convertQueryToMap(q)).toBe(out);
    })
})