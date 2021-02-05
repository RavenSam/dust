export default function Author({ author }) {
   return (
      <div className="author">
         <div className="authorImg">
            <img src={author.picture} alt="Author Image" />
         </div>
         <p className="authorName">{`${author.firstName} ${author.lastName}`}</p>
         <style jsx>{`
            .author {
               display: flex;
               align-items: center;
            }

            .authorImg {
               height: 3rem;
               width: 3rem;
               border-radius: 100%;
               overflow: hidden;
            }

            .authorName {
               margin-left: 0.5rem;
               text-transform: capitalize;
               font-size: 12px;
               letter-spacing: 2px;
            }
         `}</style>
      </div>
   )
}
