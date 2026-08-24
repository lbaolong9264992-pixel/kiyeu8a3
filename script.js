/* =========================================================
   KỈ YẾU 8A3
   SCRIPT.JS

   Ảnh được lưu trực tiếp trong GitHub.
   Không cho người xem thay đổi ảnh.
   ========================================================= */


document.addEventListener("DOMContentLoaded", function () {

    /*
     * Lấy tất cả ảnh trong các ô ảnh
     */
    const photos = document.querySelectorAll(".photo-slot img");


    /*
     * Hiển thị ảnh
     */
    photos.forEach(function (photo) {

        photo.style.display = "block";

    });


    /*
     * Không cho kéo ảnh ra ngoài trang
     */
    photos.forEach(function (photo) {

        photo.addEventListener("dragstart", function (event) {

            event.preventDefault();

        });

    });

});
