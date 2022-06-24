interface IContainerQuery {
    php_function_code: string;
    php_function_desc: string;
    page_item_id: number;
    position_code: string;
    is_userable: number;
    is_mobile: number;
    is_test_mode: number;
    sequence: number;
    element_module1?: string;
    element_module2?: string;
    element_module3?: string;
    nonlogged_container_module?: string;
    viewer_container_module?: any;
    before_first_container_module?: string;
    in_first_container_module?: string;
    in_course_container_module?: string;
    after_course_active_container_module?: string;
    after_course_lost_container_module?: string;
    const_param1?: string;
    const_param2?: string;
    const_param3?: any;
    const_param4?: any;
    const_param5?: any;
    module_title?: string;
    module_level: string;
    date_from: string;
    date_to?: string;
    client_ng_event: string;
    client_ng_object_type?: any;
    client_ng_controller?: string;
    client_ng_user_view1?: string;
    container_css_layout?: string;
    container_css_class?: string;
    container_css_anim?: string;
    sql_scroll_init: string;
    sql_scroll_count: string;
    scroll_infi_distance?: any;
    scroll_infi_function_name?: any;
    tooltip_instructor?: string;
    is_lozad: string;
    cache_minute?: number;
}


export default IContainerQuery;
