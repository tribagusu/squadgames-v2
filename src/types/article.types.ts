export type ArticleItem = {
  fields: {
    title: string;
    trainingDesc: string;
    image: {
      fields: {
        file: {
          url: string;
          details: {
            image: {
              width: number;
              height: number;
            };
          };
        };
      };
    };
    customerSatisfaction: number;
    trainerSatisfaction: number;
    product_name: {
      fields: {
        name: string;
      };
    };
    games?: {
      fields: {
        name: string;
      };
    }[];
    video?: string;
    clientTesti: string;
    article: string;
  };
};

export type CaseStudyEntry = ArticleItem & {
  contentTypeId: string;
};
