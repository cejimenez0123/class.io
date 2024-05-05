



class Answer{
    id
    content
    questionId
    constructor(id,content,questionId){
        this.id =id
        this.content = content
        this.questionId = questionId
    }
}
// id String @id @default(auto()) @map("_id") @db.ObjectId
//   content String
//   question Question   @relation(fields: [questionId], references: [id])
//   questionId     String @db.ObjectId