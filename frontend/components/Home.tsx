import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import React from "react";

interface CardProps {
  title: string;
  description: string;
  content: string;
}

const CardComponent: React.FC<CardProps> = ({
  title,
  description,
  content,
}) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      {content.split("\n").map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </CardContent>
    <CardFooter>
      <p>
        <i>~Deepesh</i>
      </p>
    </CardFooter>
  </Card>
);

const Home: React.FC = () => {
  const cards: CardProps[] = [
    {
      title: "Kabhi mila nhi tujse",
      description: "Scene: Imaging a girl who's waiting for me",
      content: `Kabhi mila nhi tujse, Pr janta hu tuje
          Bhot nadan hai, Pr manta hu tuje
          Chhoti si baat pr rooth jati hai
          Phir gale laga kr sab bhool jati hai
          Kabhi mila nhi tujse, Pr janta hu tuje
          Meri har cheez ka khyal kaise rakh leti hai tu
          Na hoke bhi yha, mere pass kaise reh leti hai tu
          Kabhi mila nhi tujse, pr janta hu tuje
          Bhot jidhi hai, sochti hai apni har baat manwa to aata hi hoga
          Aankho se bta deti hai sari baate, jaise mai to sab jaanta hi hoga
          Pta nhi tujse kab mulakat hogi
          Pr, vo bhi kya haseen raat hogi
          Mai teri baate tuje hi btaunga 
          Bhale hi, Kabhi mila nhi tujse
          pr jaanta hu tuje. 
          `,
    },
    {
      title: "Nhi Janta",
      description: "Tired Feeling",
      content: `Tere khwab k sahare mai kab tak jee paunga, nhi janta
      Tuje in panno pe mai kab tak likh paunga, nhi janta
      Saanse to chl rhi hai meri, dhadkan kab sun paunga, nhi janta
      Bas janta hu ki ek talaash pe nikla hu
      Laut k aaunga ya laash ban jaunga, nhi janta.
      `,
    },
    {
      title: "Dost",
      description: "For my best friend Kinshu",
      content: `Vo dost hai mera, usse apni jaan se bhi jada chahta hu
      Meri shayari uspe bhale hi na ho, pr sabse pehle usse sunata hu
      Meri zindagi usse bhale hi na ho, pr jab tak vo hai sirf tab tak jeena chahta hu
      Vo dost hai mera, mai usse apni jaan se bhi jada chahta hu
      Meri sari taqleef sari preshani sirf vo hi samjhta hai
      Chahe kuch bhi ho jaye, muje akela kabhi nhi rakhta hai
      Uske sare raaj sirf muje pta hai, sochta hoga vo ki auro ko bhi bta rakhe hai
      Samjhta hu usko har kisi se jada mai, har jagah humne apni dosti k jhande gaad rakhe hai
      Vo dost hai mera, mai usse apni jaan se bhi jada chahta hu
      Meri zindagi usse bhale hi na ho, pr jab tak vo hai sirf tab tak jeena chahta hu
      `,
    },
    {
      title: "Iss chaand me",
      description: "Imagining Nature",
      content: `Iss chaand me, mai ek chehra dhundne ki koshish krta hu
      In tarro ko gin-gin kr, teri umr badhata rehta hu
      In parindo ke jode ko dekh kr, yu hi jeene ko dil krta hai
      In ped podho ko dekh kr, ab sang theharne ka man krta hai
      Iss samandar ko dekh kr, ab uss chaand se milne ko jee krta hai
      Iss chaand me, mai ek chehra dhundne ki kosish krta hu
      `,
    },
    {
      title: "Akelapan",
      description: "Lack of interest",
      content: `Bhook pyas neend sab mit rhi hai
      Teri yaad k aage duniya nhi dikh rhi hai
      Baitha hu apne sath teri yaad mai
      Kisse btau kaise btau kitna barbad mai
      Zindagi chhodne ki batte to mano aam ho gyi
      Ab ye dard ki zindagi mere naam ho gyi
      Jo likh rha hu khi vhi meri maut ka paigaam to nhi.
      `,
    },
    {
      title: "Ab aankhe band krli maine",
      description: "Using different contexts of closing eyes",
      content: `Ab aankhe band krli maine
      Phir kyu mujhko vo dikhti hai
      Kehte hai uska shehar alag hai
      Phir kyu yaadon mai rehti hai
      Ab aankhe band krli maine
      To kyu mere sath vo jeeti hai
      Kehte hai bhor k sapne sach hote hai
      To kyu ye aankhe khulti hai
      Ab aankhe band krli maine
      Kyu mai sab jaan jata hu
      Kehte hai, tum kabhi uske nhi ho sakte
      Phir kyu use mai chahta hu.
      `,
    },
    {
      title: "Dhundhte Dhundhte",
      description: "Fond of",
      content: `Tuje dhondhte dhondhte sarhade paar kar jate hai
      Aaj kal ye buzzdil har cheez se dar jate hai
      Ab khwab kya dekhe thake hare log
      Sote aise hai ki mar jate hai.
      `,
    },
    {
      title: "...",
      description: "Going to sleep",
      content: `Pero mai chhale hai mere
      Kaaton pe chlta hu
      Jo phool tuje dena hai
      Uski jad dhundhta rehta hu
      Or kya khoob hai ye badal 
      Jinpe tere naam ka pehla akshar bunta hu
      Suraj doob gya in aasuo se ab
      Chand khil gya hoga mera
      Chlo, neend mai milta hu!!!
      `,
    },
    {
      title: "Syahi",
      description: "Refering myself as pen and my love as ink",
      content: `Chalte chalte har baar girta hun
      Udte udte har baar mai marta hun
      Aasun ab phishal rhe hai iss ret ki tarah
      Har raat sawera hone ka intezaar karta hun
      Sawal mere hazar ho gye, panne khatam hona na hona uske hath mai hai
      Kalam sukha de meri koi matlab nhi, mai aasuo se syahi bharta hun.
      `,
    },
    {
      title: "Ladke",
      description:
        "Of course, ladki ka darja bohot upr hai, pr ladko ki taraf se kuch lines",
      content: `Zimmedariyan bhar jati hain koi khwaab nhi hota
      Sawal bohot aise hote jinka koi jawaab nhi hota
      Khushi sabki chahiye or apna koi khyal nhi hota
      Sab sath leke chalna to hai pr koi saath nhi hota
      Kuch ladke hi hain, bas ladte hi hain
      Kuch gharpe bhi hain bas padhte ni hain
      Bahar bhi hain kuch aawara ladke
      Or chhip k baithe kuch nakara gharpe
      Ladki hue to gudiya laadli laxmi hue hai
      Ladka hai to aaya hai sahaara banke
      Shayad vo hasta chehra mehnat k peeche thak gya hai
      Haal mat puchna pr, usko “sab theek hai” ratt gya hai
      Kya krna hai zindagi me pta hai usse, kya krna tha kahi dabb gya hai
      Vo ladka hi hai jo akela marr k bhi bach gya hai.
      `,
    },
  ];

  return (
    <div className="flex my-20 flex-wrap flex-row gap-20 items-center mx-10 lg:mx-60 md:mx-40 sm:mx-20">
      {cards.map((card, index) => (
        <CardComponent key={index} {...card} />
      ))}
    </div>
  );
};

export default Home;
