// here will be a lot of string methods


let link = 'https://inc4.net/what-can-cedefi-bring-to-the-crypto-industry/';

const removeProtocol = link => {
    const regex = /\/\/(.*)\/?/;
    return link.match(regex) ? link.match(regex)[1] : link;
}

link = removeProtocol(link);
// Output: inc4.net/what-can-cedefi-bring-to-the-crypto-industry/

const camelCase = link => {
    const camelizeWord = word => {
        return word
            .split('-')
            .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1))
            .join('');
    };
    link = link.split(/\//g).slice(1);
    link.map((el, index, arr) => {
        if(el) {
            return camelizeWord(el);
        }
    });
    return link;
};

console.log(camelCase('asdsad-asdasd/asdasda-asd/asdasd-adsasdasd/'));

console.log(camelCase(link));

const getDomain = link => link.split('/')[0];

const domain = getDomain(link);
// Output: inc4.net


// here will be a lot of number methods