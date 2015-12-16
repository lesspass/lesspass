export function string2Uint8Array(text) {
    var buf = new ArrayBuffer(text.length * 2); // 2 bytes for each char
    var bufView = new Uint8Array(buf);
    for (var i = 0, strLen = text.length; i < strLen; i++) {
        bufView[i] = text.charCodeAt(i);
    }

    return bufView;
}

export function getTemplate(templates, index) {
    return templates[index % templates.length];
}

export function encode(template, indexes) {
    var encodedArray = indexes.map(index => template[index % template.length]);
    return encodedArray.join('');
}

