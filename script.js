document.addEventListener("DOMContentLoaded", function () {

    const slots = document.querySelectorAll(".photo-slot");


    slots.forEach(function (slot) {

        const input = slot.querySelector("input");
        const image = slot.querySelector("img");


        input.addEventListener("change", function () {

            const file = this.files[0];

            if (!file) {
                return;
            }


            // Kiểm tra có phải ảnh không
            if (!file.type.startsWith("image/")) {

                alert("Vui lòng chọn một file hình ảnh!");

                return;
            }


            // Tạo đường dẫn tạm thời cho ảnh
            const imageURL = URL.createObjectURL(file);


            // Hiển thị ảnh
            image.src = imageURL;

            image.style.display = "block";


            // Khi ảnh load xong
            image.onload = function () {

                URL.revokeObjectURL(imageURL);

            };

        });

    });

});
