import { dataNewsKinhDoanh, dataNewsTheThao, dataNewsGiaiTri } from './data';
const dataBox = [
    {
        id: 1,
        title: 'Kinh doanh',
        subTitle: ['Quốc tế', 'Doanh nghiệp', 'Chứng khoán', 'Bất động sản', 'Bảo hiểm'],
        news: [...dataNewsKinhDoanh],
    },
    {
        id: 2,
        title: 'Thể thao',
        subTitle: ['Bóng đá', 'Tennis', 'Marathon', 'Lịch thi đấu'],
        news: [...dataNewsTheThao],
    },
    {
        id: 3,
        title: 'Giải trí',
        subTitle: ['Giới sao', 'Phim', 'Nhạc', 'Thời trang', 'Sách'],
        news: [...dataNewsGiaiTri],
    },
    {
        id: 4,
        title: 'Sức  khỏe',
        subTitle: ['Bài học sống', 'Tổ ấm', 'Nhà', 'Tiêu Dùng'],

        news: [...dataNewsKinhDoanh],
    },
    {
        id: 5,
        title: 'Khoa học',
        subTitle: ['Trong nước', 'Phát minh', 'Ứng dụng', 'Thế giới tự nhiên'],
        news: [...dataNewsKinhDoanh],
    },
    {
        id: 6,
        title: 'Giáo dục',
        subTitle: ['Tin tức', 'Tuyển sinh', 'Chân dung', 'Giáo dục 4.0'],
        news: [...dataNewsKinhDoanh],
    },
];
export { dataBox };
