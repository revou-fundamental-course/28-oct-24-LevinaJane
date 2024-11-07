function hitung(){
    const berat = parseFloat(document.getElementById("bb").value);
    const tinggi = parseFloat(document.getElementById("tb").value) / 100;  
    // bagi 100 untuk ubah dari cm jadi m

    if (isNaN(bb) || isNaN(tb) || bb <= 0 || tb <= 0){
        alert("Please input a valid value");
        return;
    }

    const bmi = (bb / (tb * tb)).toFixed(1);
    document.getElementById("hasil-bmi").textContent = bmi;

    let kategori = "";
    if(bmi < 18.5){
        kategori = "kekurangan berat badan";
    } else if(bmi < 24.9){
        kategori = "normal";
    } else if(bmi < 29.9){
        kategori = "kelebihan berat badan";
    } else{
        kategori = "obesitas";
    }
    
    document.getElementById("kategori-bmi").textContent=kategori;

}