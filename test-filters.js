const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const html = fs.readFileSync('modelos.html', 'utf8');
const dom = new JSDOM(html);
const document = dom.window.document;
const window = dom.window;

// create mock localStorage
window.localStorage = {
    getItem: function(key) {
        if (key === 'bancoModelos') {
            return JSON.stringify([
                { 
                    id: 'buque-de-bubble', 
                    nome: 'Buquê de Bubble', 
                    categoria: 'Balões Prontos', 
                    preco: '149,90', 
                    status: 'ativo',
                    tags: ['bubble', 'bouquet', 'aniversário', 'formatura', 'corporativo', 'outros'],
                    cores: [{ nome: 'Branco', corHex: '#ffffff' }]
                }
            ]);
        }
        return null;
    },
    setItem: function() {}
};

global.document = document;
global.window = window;
global.localStorage = window.localStorage;

try {
    eval(fs.readFileSync('script.js', 'utf8'));
    
    // simulate checking a checkbox
    const checkboxesTipo = document.querySelectorAll('.filter-group')[0].querySelectorAll('input[type="checkbox"]');
    // Check 'Bubble' (which is the first one)
    checkboxesTipo[0].checked = true;
    
    // manually call runFilters or wait for event
    // since it's inside an IIFE/DOMContentLoaded, we might not have access to runFilters
} catch (e) {
    console.error(e);
}
