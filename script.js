// Toggle humburger
const navbarNav = document.querySelector ('.navbar-nav');
document.querySelector('#hamburger-menu').onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
};

//hamburger,search click bebas close
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector ('#search-button');

document.addEventListener ('click', function(e) {
    if(!hm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    if(!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
})


//search
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector ('#search-box')

document.querySelector ('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
}



//header
document.addEventListener("DOMContentLoaded", function () {
    const hero = document.querySelector(".hero");
    const productTitle = document.getElementById("productTitle");
    const productDescription = document.getElementById("productDescription");
    const prevProduct = document.getElementById("prevProduct");
    const nextProduct = document.getElementById("nextProduct");
    let currentProductIndex = 0;

    const products = [
        {
            title: "Ayam Geprek",
            description: "Ayam geprek kami bukan sekadar menu, melainkan sebuah cerita panjang tentang dedikasi kami untuk memberikan yang terbaik. Dengan ayam pilihan dan sambal berbumbu, kami mengajak Anda untuk merasakan petualangan rasa yang memikat, memenuhi hasrat kuliner Anda dalam setiap sajian.",
            background: "geprek2.jpg"
        },
        {
            title: "Mie Geprek",
            description: "Mie geprek kami adalah perwujudan dari kecintaan kami pada kelezatan yang berani. Dari mie yang diolah dengan cermat hingga sambal yang dipilih dengan teliti, setiap suap adalah perjalanan rasa yang mengajak Anda merasakan keunikan cita rasa dalam setiap serat mie dan setetes sambal.",
            background: "mie1.jpg"
        },
        {
            title: "Ayam Bakar",
            description: "Dalam setiap gigitan ayam bakar kami, Anda akan merasakan kesempurnaan cita rasa yang lahir dari perpaduan sempurna antara kelembutan daging ayam yang dipanggang secara merata, diselimuti dengan bumbu bakar yang khas, sebuah pengalaman kuliner yang mengajak Anda untuk merayakan kelezatan dalam setiap suapannya.",
            background: "ayam-panggang.jpg"
        },
        {
            title: "Pisang Nugget",
            description: "Pisang nugget kami adalah bukti bahwa kelezatan dapat hadir dalam setiap potongan. Dari kesegaran pisang yang diolah dengan hati hingga hasil penggorengan yang sempurna, setiap pisang nugget adalah perjalanan panjang rasa yang mengundang Anda merasakan kenikmatan dalam setiap serat dan kelezatan yang luar biasa.",
            background: "pisang.jpg"
        },
        {
            title: "Cireng isi ayam",
            description: "Kami hadirkan cireng isi ayam sebagai jawaban atas keinginan Anda akan cita rasa yang luar biasa. Dari lapisan kulit cireng yang kriuk hingga kejutan rasanya ketika Anda mencicipi isi ayam lezat di dalamnya, setiap gigitan adalah pengalaman kuliner yang memanjakan selera dan menciptakan kenangan rasa yang istimewa.",
            background: "cireng.jpg"
        }
        // Tambahkan produk lain jika diperlukan
    ];

    function updateProduct() {
        productTitle.textContent = products[currentProductIndex].title;
        productDescription.textContent = products[currentProductIndex].description;
        hero.style.backgroundImage = `url(${products[currentProductIndex].background})`;
    }

    prevProduct.addEventListener("click", function () {
        currentProductIndex = (currentProductIndex - 1 + products.length) % products.length;
        updateProduct();
    });

    nextProduct.addEventListener("click", function () {
        currentProductIndex = (currentProductIndex + 1) % products.length;
        updateProduct();
    });

    // Tampilkan produk pertama saat halaman dimuat
    updateProduct();
});
