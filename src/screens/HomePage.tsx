import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DefaultLayout from '../complexes/DefaultLayout';
import MainImage from '../basics/MainImage';

const AsideImageOuter = styled.figure`
  float: right;

  & > img {
    border: solid 1px #ccc;
    box-shadow: 0 0 1rem #0003;
  }
`;

const HomePage: React.FC = () => {
  return (
    <DefaultLayout className="HomePage">
      <h1>Welcome to My Great App!</h1>
      <p>
        Hi World!
        My name is Ginpei Takanashi.
        I write JavaScript.
        I make JapaneseSushi.
      </p>
      <p>
        →
        <Link to="/about">About</Link>
      </p>
      <MainImage/>
      <p>私は今大分その観察らというものの時にありですだろ。
いよいよ昨日が用意家はすでにその破壊なけれうくらいをあっているたをは料理思うですなけれで、全くとはしないなけれないない。呑を考えるたのはちっとも生涯の何しろべきませでし。

たとい大森さんが実在政府そう説明を云わた横その先方そこか応用をというご反駁でますないあるて、こういう毎日もそれか徳義心客が云っば、岡田さんののから必然の私にまあ実講演とありて私釣に実お話しにしように始めて肝仮定に解らですうけれども、けっして常に諷刺を保つませからおきで訳に生きなた。ただするとご自分を評しのはどう愉快と見えたば、その敵をはやっつけなからといった自分が引張りていないませ。その所金力のためどんな詫はあなたごろをしうかと大森君で見合せですです、生徒の今たについてお料簡ですたませて、横の時に本場を一生なりの世の中を今いいていば、まだの一生を云いからこんなためにどうしても読んましならと行っで方ませて、高くですですてたったご権力行かたのですなけれで。

しかし事業か心丈夫か妨害にやつしなかっが、時間上身となるてしまえないためがご利用の前に引き離すないた。たくさんがはずっとして遂げよでありなくまして、ざっとなお合うて発会はどう旨くなので。すなわちご満足をしてもみるん訳たて、孔雀には、けっしてそれか思わてするられないです出れうたと云っから、義務は使うて得ですなく。

どうももしはとうとう権力として得るますて、どこをは事実中だけよそのお満足はありがたく考えいるましです。何ももう記憶の事にお講義はもつれでいるませですでまして、二一の癪をちょっと云いたについて安心たと、あるいはある責任の間断に流行るられから、私かを何の羽根から運動とさともらっない点ますですと矛盾かれから脱却なるくるたう。会にそうして岡田君にそうしてはっきりあっませのたございた。

岡田さんもたった海鼠がするて思わた訳ありでな。

（また順序をもたらす時ないですたからではなるでんて、）そう思いない秋を、dutyの手かもするばあっという、国家の解は今の時くらいさ洗わものをいうなけれて担任ども移ろばいましというご後れたら事た。

私は同時に通りで掘りませように貼りがいだのましてしたがってさらに驚兄弟しませです。実は少々二本は私立を怠けば、当時をことに上げるたべきと防ぐて、ないですですながらまたご満足を上げるなかった。国の今日を、そんな寄宿舎と場合を歩くだけ、昨日上にぴたり今一十十日に見えだけの家屋に、これかほかならた相違からついらしく十月も万よるれのたから、もっともあいにく圏外にありがたいから、こういうものにしものと変則たない至っでしょます。またまあ絶対二三一年でしまではしうにおいて不安たら学問を云おので、大名のそのためほんのためを読みてもらいないのた。何しろに用と弟いるた二一カ年以前がせば、それかできますてくれるたいというのにとても知れたのんが、つるつる通り越しものに不審ますて、無論赤を申し上げと出ていますない。

麦飯に思うとあてるて私かないのを申すようにしばかりありなでて、それから他愛は淋しい方に達しが、よそに席に起るならば一軒を一字は一人は現に出からならだけないのませ。</p>
      <AsideImageOuter>
        <img
          alt="Sushi on white plate."
          src="https://ginpei.info/static/images/makingSushi.jpg"
        />
      </AsideImageOuter>
      <p>Maxime similique officiis temporibus quasi eaque minus, quibusdam aspernatur repellat numquam nesciunt cumque ut fugiat inventore suscipit id molestias voluptate delectus ullam reiciendis quas quaerat magnam quos voluptates. Doloribus, eaque.</p>
      <p>Consectetur minus aliquam iste porro maxime corrupti obcaecati error corporis, pariatur eligendi repellat quae explicabo cumque repudiandae? Fugit maiores, consequuntur reiciendis accusamus praesentium qui perferendis quaerat sapiente mollitia maxime reprehenderit?</p>
      <p>Quibusdam iusto, quae consectetur quo animi aliquid qui voluptatem nihil eaque omnis, corrupti eveniet repellat voluptate officiis nesciunt. Accusantium nam et accusamus? Omnis similique sapiente inventore ea, vitae eligendi placeat!</p>
      <p>Nulla voluptate earum ipsa, alias sequi assumenda nihil facilis. Voluptates explicabo reprehenderit nulla molestias veritatis in eum omnis aperiam sapiente voluptatibus incidunt non quas sint est, ullam nam maxime obcaecati?</p>
      <p>Aut ipsam nam consequuntur beatae tempora impedit iure deserunt quod commodi dignissimos natus pariatur totam possimus est inventore porro hic ab praesentium culpa doloremque id, quos accusamus. Labore, vero assumenda.</p>
    </DefaultLayout>
  );
}

export default HomePage;
