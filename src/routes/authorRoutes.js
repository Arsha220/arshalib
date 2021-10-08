const express=require("express");
const authorRouter=express.Router();
function router(nav){
    var authors=[
        {
            author:'Joseph Barbera',
            genre:'Cartoon',
            img:'Joseph.jpg',
            desc:'Joseph "Joe" Roland Barbera ( March 24, 1911 – December 18, 2006) was an American animator, director, producer, storyboard artist, and cartoon artist, who co-founded the animation studio and production company Hanna-Barbera.The Hanna-Barbera studio produced over 3000 animated half-hour television shows. Among the more than 100 cartoon series they produced were The Quick Draw McGraw Show, Top Cat, Jonny Quest, The Magilla Gorilla Show, The Atom Ant/Secret Squirrel Show, Scooby-Doo, Super Friends, and The Smurfs',
        },
        {
            author:'J K Rowling',
            genre:'Fantasy',
            img:'jkrowl.jpg',
            desc:'Joanne Rowling CH, OBE, HonFRSE, FRCPE, FRSL (born 31 July 1965), better known by her pen name J. K. Rowling, is a British author, philanthropist, film producer, television producer, and screenwriter. She is best known for writing the Harry Potter fantasy series, which has won multiple awards and sold more than 500 million copies, becoming the best-selling book series in history.',
        },
        {
            author:'Basheer',
            genre:'Drama',
            img:'basheer1.jpg',
            desc:'Vaikom Muhammad Basheer (21 January 1908 – 5 July 1994), also known as Beypore Sulthan, was an Indian independence activist and writer of Malayalam literature . He was a writer, humanist, freedom fighter, novelist and short story writer, noted for his path-breaking, down-to-earth style of writing that made him equally popular among literary critics as well as the common man. His notable works include Balyakalasakhi, Shabdangal, Pathummayude Aadu, Mathilukal, Ntuppuppakkoranendarnnu, Janmadinam and Anargha Nimisham and the translations of his works into other languages have earned him worldwide acclaim. The Government of India awarded him the fourth highest civilian honor of the Padma Shri in 1982. He was also a recipient of the Sahitya Academy Fellowship, Kerala Sahitya Academy Fellowship, and the Kerala State Film Award for Best Story.',
        }
    ]
    
    authorRouter.get('/',function(req,res){
        res.render('authors',{
            nav,
            title:'Library',
            authors
        });
    });
    
    
    authorRouter.get('/:id',function(req,res){
        const id=req.params.id;
        res.render('author',{
            nav,
            title:'Library',
            author:authors[id]
        });
    });
    return authorRouter;    
}


module.exports=router;