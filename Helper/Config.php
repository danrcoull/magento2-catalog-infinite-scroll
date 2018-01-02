<?php

namespace SuttonSilver\InfiniteScroll\Helper;
use \Magento\Framework\App\Helper\AbstractHelper;

class Config extends AbstractHelper {

    const BASE = 'infinitescroll/';
    const ENABLED = self::BASE.'general/enabled';

    public function isEnabled()
    {
        if(!$this->scopeConfig->getValue(self::ENABLED, 'store'))
        {
            return false;
        }

        return true;
    }

}