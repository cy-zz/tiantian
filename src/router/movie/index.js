export default {
    path : '/movie',
    component : () => import('@/views/Movie'),
    children : [
        {
            path : 'city',
            component : () => import('@/components/City')
        },
        {
            path : 'nowPlaying',
            component : () => import('@/components/NowPlaying')
        },
        {
            path : 'comingSoon',
            component : () => import('@/components/ComingSoon')
        },
        {
            path : 'search',
            component : () => import('@/components/Search')
        },
        //二级路由的重定向
        {
            path : '/movie',
            redirect : '/movie/nowPlaying'
            //由上面的一级路由重定向到下面的二级路由
        }
    ]
    //@表示src
}