
var Trie = function() {
    this.root = new Map()
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
   let cur = this.root;
  
    for (const char of word) {
        if (!cur.has(char)) { cur.set(char, new Map()); }
        
        cur = cur.get(char);
    }
  
    cur.set('end', true);
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let cur = this.root;
  
    for (const char of word) {
        if (!cur.has(char)) { return false; }
        cur = cur.get(char);
    }

    return cur.has('end');
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let cur = this.root;
  
    for (const char of prefix) {
        if (!cur.has(char)) { return false; }
        cur = cur.get(char);
    }
  
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */