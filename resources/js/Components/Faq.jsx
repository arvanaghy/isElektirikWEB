import { useState } from "react";

const FAQ = () => {
  const faqsList = [
    {
      label: "category 1",
      qas: [
        {
          q: "question 1/1",
          a: " lorem ipsum dolor sit amet consectetur adipisicing elit. ",
        },
        {
            q: "question 1/2",
            a: " lorem ipsum dolor sit amet consectetur adipisicing elit. ",
        },
      ],
    },
    {
      label: "category 2",
      qas: [
        {
            q: "question 2/1",
            a: " lorem ipsum dolor sit amet consectetur adipisicing elit. ",
        },
        {
            q: "question 2/2 ",
            a: " lorem ipsum dolor sit amet consectetur adipisicing elit. ",
        },
      ],
    },
    {
        label: "category 3",
        qas: [
          {
            q: "question 3/1",
            a: " lorem ipsum dolor sit amet consectetur adipisicing elit. ",
          },
          {
              q: "question 3/2",
              a: " lorem ipsum dolor sit amet consectetur adipisicing elit. ",
          },
        ],
      },
  ];

  const [open, setOpen] = useState(false);
  const [selcetFaq, setSelcetFaq] = useState(null);
  const handleFAQ = (faq) => {
    setOpen(true);
    setSelcetFaq(faq);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:py-3 text-center text-black lg:w-1/3 rounded-t-xl lg:rounded-r-xl lg:rounded-t-none">
        <ul className="w-full lg:space-y-7 space-y-2 ">
          {faqsList.map((faq, idx) => (
            <li
              key={idx}
              onClick={() => handleFAQ(faq)}
              className="cursor-pointer hover:scale-105 hover:opacity-80 lg:text-2xl bg-[#f3f2f2] rounded-xl lg:py-3 py-1"
            >
              {faq.label}
            </li>
          ))}
        </ul>
      </div>
      {!open ? (
        <div className="flex items-center justify-center w-full py-3 space-y-5 text-center align-middle lg:rounded-l-lg lg:w-2/3 text-black ">
          <p className="flex flex-row items-center justify-center my-auto align-middle ">
            6Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur accusamus laborum architecto, ab illum molestias quod voluptate aut commodi autem! Commodi animi accusantium maiores voluptatibus odio temporibus mollitia accusamus dolor!
          </p>
        </div>
      ) : (
        <ul className="w-full text-center lg:rounded-l-lg lg:w-2/3 text-black my-auto">
          {faqsList.map((ques, idx) => {
            if (ques.label === selcetFaq.label) {
              return (
                <li key={idx}>
                  <ul className="space-y-5">
                    {ques.qas.map((qa, idx) => (
                      <li key={idx}>
                        <h4 className="text-xl mb-4 ">{qa.q}</h4>
                        <p>{qa.a}</p>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            }
          })}
        </ul>
      )}
    </div>
  );
};

export default FAQ;
