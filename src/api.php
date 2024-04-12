<?php

add_action( 'rest_api_init', function () {
	register_rest_route( 'v1', '/chat', array(
		'methods'             => 'POST',
		'callback'            => 'send_chat_msg',
	) );
});

function send_chat_msg($request) {
    $api_endpoint = 'https://api.chatpdf.com/v1/chats/message';

    $data = $request->get_json_params();

    $config = array(
        'headers' => array(
            'x-api-key' => get_option('chatpdf_chatbot_secret_key'),
            'Content-Type' => 'application/json'
        ),
        'body' => json_encode($data),
        'timeout'     => 45,
    );

    $response = wp_remote_post($api_endpoint, $config);

    if (!is_wp_error($response) || empty( $api_response ) || 200 !== $api_response['response']['code']) {
        $body = wp_remote_retrieve_body($response);
        return new WP_REST_Response(json_decode($body), 200); // Return the response
    } else {
        return new WP_Error('error', 'Failed to send chat message', array('status' => $response->get_error_code()));
    }
}