const express=require("express");
const booksRouter=express.Router();
function router(nav){
    var books=[
        {
            title:'Tom and Jerry',
            author:'Joseph Barbera',
            genre:'Cartoon',
            img:'Tom.jpg',
            desc:'The Tom and Jerry license was at Western Publishing for books, comics, puzzles and more from their first appearance in an comic issue of Our Gang in 1942 until the end of Western Publishing in the early 90s.',
        },
        {
            title:'Harry Potter',
            author:'J K Rowling',
            genre:'Fantasy',
            img:'harry.jpg',
            desc:'Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.',
        },
        {
            title:'Pathummayude Aadu',
            author:'Basheer',
            genre:'Drama',
            img:'basheer.jpg',
            desc:'Pathummayude Aadu is a humorous novel by Vaikom Muhammad Basheer. The characters of the novel are members of his family and the action takes place at his home in Thalayolaparambu. The goat in the story belongs to his sister Pathumma. Basheer begins the novel with an alternative title for the book, Pennungalude Buddhi ',
        }
    ]
    
    booksRouter.get('/',function(req,res){
        res.render('books',{
            nav,
            title:'Library',
            books
        });
    });
    
    
    booksRouter.get('/:id',function(req,res){
        const id=req.params.id;
        res.render('book',{
            nav,
            title:'Library',
            book:books[id]
        });
    });
    return booksRouter;    
}


module.exports=router;