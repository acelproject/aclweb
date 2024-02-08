// images
import kufraImg from "../src/assets/kufra.jpg";
import selenaImg from "../src/assets/selena.jpg";
import atlasImg from "../src/assets/atlas.jpg";
import Content from "./Content";

export default function ContentWrapper({ active }) {
  return (
    <>
      {active === 1 && (
        <Content
          img={kufraImg}
          role="Role : Tank"
          decs="Khufra adalah penguasa yang rakus, lebih dingin dari es, dan
              serakah hingga batas yang tak terbatas. Untuk memuaskan keinginan
              pribadinya untuk memerintah, dia memimpin pasukan Arnak yang kuat
              untuk menyerang kota untuk menaklukkan Gurun Barat. Tanpa mengenal
              lelah, Khufra memperluas wilayah kekuasaan dan kekayaannya hingga
              tak tertandingi. Sayangnya, Kekaisaran Minoa terbukti merupakan
              musuh yang terlalu sulit untuk ditaklukkan."
        />
      )}
      {active === 2 && (
        <Content
          img={selenaImg}
          role=" Role : Mage"
          decs="Dark Elf Selena telah bergantung pada adiknya Karina sejak kecil.
        Selena mempertahankan sifat polosnya di bawah perlindungan
        adiknya, hingga ia mengetahui hal-hal kotor yang telah dilakukan
        kakaknya, Karina, untuknya. Dia mengira dirinya telah menjadi
        beban bagi adiknya. Untuk mendapatkan lebih banyak kekuatan, dia
        mengabdikan dirinya pada Abyss, tetapi tidak ingin sepenuhnya
        dikendalikan oleh Abyss dan akhirnya menjadi iblis yang
        mengerikan."
        />
      )}
      {active === 3 && (
        <Content
          img={atlasImg}
          role=" Role : Tank"
          decs="Atlas adalah salah satu makhluk Laut Abysmal kuno , yang disegel
        di laut dalam oleh Yang Kuno. Atlas menemukan Mecha yang dibangun
        oleh Golem Islandia di Laut Abysmal di masa lalu. Dengan
        berintegrasi dengan Mecha, Atlas melarikan diri dari Laut Abysmal
        dan datang ke lautan di seluruh dunia untuk menyerap pengetahuan.
        Ia menantikan suatu hari nanti ia mampu melanggar larangan
        tersebut, sehingga jenisnya sendiri bisa bebas."
        />
      )}
    </>
  );
}
