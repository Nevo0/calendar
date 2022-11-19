import "bootstrap/dist/css/bootstrap.min.css";


import { Modals } from './Modals';

export function Time(tiem_list) {

const test= {
    "Brushing teeth":[
        {
            "title":"Use the right toothbrush",
            "content":"Picking a toothbrush should be a Goldilocks moment. You dont want a handle that is too long or too short; you don’t want a head that is too big or too small;             and you don’t want bristles that are too hard or too soft. You want a toothbrush that is “just right”.   If you need assistance in determining what toothbrush is right for you, talk to your dentist.",
    
    },
     {
        "title":"Keep your toothbrush clean",
        "content":" Setting your toothbrush on your bathroom counter or on the edge of your sink between uses is a great way to pick up bacteria. Instead, store your toothbrush upright using a toothbrush holder or a cup.In addition to rinsing your toothbrush thoroughly after each use, you can also soak your toothbrush in a mixture of hydrogen peroxide and water or an anti-bacterial mouthwash. Some people even clean their toothbrush once or twice a month in the dishwasher."
},
     {
        "title":"Replace your toothbrush regularly",
        "content":"           Over time, bacteria grows on your toothbrush, not only in the bristles but on the handle. Bristles also become damaged which makes them less effective."
},
    ],
    "Morning gymnastic":[
        {
            "title":"Disadvantages of morning gymnastics  ",
            "content":"These exercises do not have flaws in themselves - only bad performance can be traumatic. You need to know how to perform the given exercises, and choose them for your person, that is, take into account the injuries and diseases.",
    
    },
     {
        "title":"The effects of morning gymnastics",
        "content":"It is proven that better results during weight loss can be noticed by doing exercises in the morning, because then the glycogen level is reduced and this fat tissue becomes a source of energy to be burned;"
},
     {
        "title":"Morning slimming exercises ",
        "content":"  It is important that these exercises are not performed on an empty stomach. It is worth drinking at least ⅓ cup of juice, eg currant, before exercise. For the effect to be better, these exercises should last a minimum of 30 minutes."
},
    ]
}
// console.log(test['Brushing teeth']);

    const doubled = tiem_list.tiem_list.map((number) => {
        if (number == 9) {
            return <li className="tiem_li" key={number}><div className="tiem_li-tiem">{number}</div>
                <div className="tiem_li-content">
                   <Modals title="Brushing teeth"  props={test['Brushing teeth']}/>
                   <Modals title="Morning gymnastic" props={test['Morning gymnastic']}/>
                </div>
            </li>
        }
        return <li className="tiem_li" key={number}><div className="tiem_li-tiem">{number}</div>
            <div className="tiem_li-content"></div>
        </li>
    });
    // const renderul = ali ? <ul>{ali}</ul> : ""
    const renderul = doubled ? <ul>{doubled}</ul> : ""
    console.log(doubled);
    return (<div className="tiem_list">{renderul}</div>);
    // return (<div>{doubled ? {doubled}: null}</div>);
}