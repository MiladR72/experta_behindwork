
// tslint:disable-next-line:no-shadowed-variable
export class MenuConfig {
	public config: any = {};

	constructor() {
		this.config = {
		  adminpanel:
        [

          {
            icon:'./assets/Icons/Svgs/all_contents.svg',
            subtitle:'مدیریت محتوا',
            titles:
              [
                {
                  title:'سوالات ، پاسخ ها و نظرات',
                  link:'que-ans-review',
                  numspan:true,
                  defult:'15'
                },

                {
                  title:'گزارش های تخلف',
                  link:'reports',
                  numspan:true,
                  defult:'30'
                },

                {
                  title:'بلاگ',
                  link:'blogs',
                  numspan:false
                },
                {
                  title:'دسته ها',
                  link:'categories',
                  numspan:false
                },

              ]


          },

          {
            icon:'./assets/Icons/Svgs/all_contents.svg',
            subtitle:'مدیریت کاربران',
            titles:
              [
                {
                  title:'کاربران',
                  link:'users',
                  numspan:false
                },


                {
                  title:'گزارش های تخلف',
                  link:'users-reports',
                  numspan:false
                },

              ]


          },

          {
            icon:'./assets/Icons/Svgs/all_contents.svg',
            subtitle:'ارسال',
            titles:
              [
                {
                  title:'پست ویژه',
                  link:'featured-posts',
                  numspan:false
                },


                {
                  title:'ایمیل',
                  link:'email',
                  numspan:false
                },

              ]


          },

          {
            icon:'./assets/Icons/Svgs/all_contents.svg',
            subtitle:'مدیریت صفحات سایت',
            titles:
              [
                {
                  title:'درباره و تماس با ما',
                  link:'wefefwef',
                  numspan:false
                },


                {
                  title:'سوالات متداول',
                  link:'wfwfwfw',
                  numspan:false
                },

                {
                  title:'قوانین و مقررات',
                  link:'fwfwfwf',
                  numspan:false
                },
              ]
          },







		    ]


		};
	}
}
