export class Vote {
  cardId: string;
  userId: string;
  lectureId: string;
  value: -1 | 0 | 1;

  constructor(cardId, userId, lectureId, value) {
    this.cardId = cardId;
    this.userId = userId;
    this.lectureId = lectureId;
    this.value = value;
  }
}
